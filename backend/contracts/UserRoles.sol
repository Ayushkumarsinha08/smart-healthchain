// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserRoles {
    enum Role { Patient, Doctor, Admin }  // Define user roles
    mapping(address => Role) public userRoles;
    mapping(address => bool) public isRegistered;

    event UserRegistered(address user, Role role);

    modifier onlyAdmin() {
        require(userRoles[msg.sender] == Role.Admin, "Only Admin can perform this action");
        _;
    }

    modifier onlyDoctor() {
        require(userRoles[msg.sender] == Role.Doctor, "Only Doctor can perform this action");
        _;
    }

    modifier onlyPatient() {
        require(userRoles[msg.sender] == Role.Patient, "Only Patient can perform this action");
        _;
    }

    function registerUser(address _user, Role _role) public onlyAdmin {
        require(!isRegistered[_user], "User already registered");
        userRoles[_user] = _role;
        isRegistered[_user] = true;
        emit UserRegistered(_user, _role);
    }

    function getUserRole(address _user) public view returns (Role) {
        require(isRegistered[_user], "User not registered");
        return userRoles[_user];
    }
}
