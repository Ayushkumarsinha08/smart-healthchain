// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MedicalAccessControl {
    struct Access {
        bool canView;
        bool canEdit;
    }

    mapping(address => mapping(address => Access)) private permissions; // Patient -> Doctor -> Permissions

    event AccessGranted(address indexed patient, address indexed doctor, bool canView, bool canEdit);
    event AccessRevoked(address indexed patient, address indexed doctor);

    modifier onlyPatient() {
        require(msg.sender != address(0), "Invalid address");
        _;
    }

    function grantAccess(address _doctor, bool _canView, bool _canEdit) public onlyPatient {
        permissions[msg.sender][_doctor] = Access(_canView, _canEdit);
        emit AccessGranted(msg.sender, _doctor, _canView, _canEdit);
    }

    function revokeAccess(address _doctor) public onlyPatient {
        delete permissions[msg.sender][_doctor];
        emit AccessRevoked(msg.sender, _doctor);
    }

    function checkAccess(address _patient, address _doctor) public view returns (bool, bool) {
        return (permissions[_patient][_doctor].canView, permissions[_patient][_doctor].canEdit);
    }
}
