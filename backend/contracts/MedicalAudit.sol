// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MedicalAudit {
    struct AuditLog {
        address doctor;
        uint256 timestamp;
        string action;
    }

    mapping(uint => AuditLog[]) public recordLogs;

    event AuditLogAdded(uint recordId, address indexed doctor, string action, uint256 timestamp);

    function logMedicalAction(uint _recordId, string memory _action) public {
        AuditLog memory newLog = AuditLog(msg.sender, block.timestamp, _action);
        recordLogs[_recordId].push(newLog);
        emit AuditLogAdded(_recordId, msg.sender, _action, block.timestamp);
    }

    function getAuditLogs(uint _recordId) public view returns (AuditLog[] memory) {
        return recordLogs[_recordId];
    }
}
