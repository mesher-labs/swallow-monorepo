pragma solidity 0.8.11;

import "./interface/ShortcutsInterface.sol";

contract Shortcuts is ShortcutsInterface {
    address public admin;

    mapping(uint256 => Shortcut) internal _shortcuts;
    uint256 internal _index;

    modifier onlyAdmin() {
        require(msg.sender == admin, "onlyAdmin");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    /* external functions */
    function getAllShortcuts() external view returns (Shortcut[] memory) {
        uint256 len = _index;
        Shortcut[] memory allShortcuts = new Shortcut[](len);

        for (uint256 i = 1; i <= len; i += 1) {
            allShortcuts[i] = _shortcuts[i];
        }
        return allShortcuts;
    }

    function getShortcutByIndex(uint256 index) external view returns (Shortcut memory) {
        return _shortcuts[index];
    }

    function addShortcut(
        string memory shortcutType,
        string memory endpoint,
        address contractAddr,
        UserParams[] memory userParams,
        bool isReady
    ) external onlyAdmin returns (uint256) {
        uint256 newIndex = _index + 1;
        Shortcut storage newShortcut = _shortcuts[newIndex];

        newShortcut.shortcutType = shortcutType;
        newShortcut.endpoint = endpoint;
        newShortcut.contractAddr = contractAddr;
        newShortcut.isReady = isReady;

        uint256 len = userParams.length;
        for (uint256 i = 0; i < len; i += 1) {
            newShortcut.userParams.push(userParams[i]);
        }
        _index = newIndex;

        emit AddShortcut(newIndex, newShortcut, block.number);
        return newIndex;
    }

    function setIsReady(uint256 index, bool newIsReady) external onlyAdmin {
        emit SetIsReady(index, newIsReady);
        _shortcuts[index].isReady = newIsReady;
    }
}
