pragma solidity 0.8.11;

import "./interface/ShortcutsInterface.sol";

contract ShortCuts is ShortcutsInterface {
    address public admin;

    mapping(uint256 => ShortCut) internal _shortCuts;
    uint256 internal _index;

    modifier onlyAdmin() {
        require(msg.sender == admin, "onlyAdmin");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    /* external functions */
    function getAllShortCuts() external view returns (ShortCut[] memory) {
        uint256 len = _index;
        ShortCut[] memory allShortCuts = new ShortCut[](len);

        for (uint256 i = 0; i < len; i += 1) {
            allShortCuts[i] = _shortCuts[i];
        }
        return allShortCuts;
    }

    function getShortCutByIndex(uint256 index) external view returns (ShortCut memory) {
        return _shortCuts[index];
    }

    function addShortCut(ShortCut memory dto) external onlyAdmin {
        uint256 newIndex = _index += 1;
        ShortCut storage newShortCut = _shortCuts[newIndex];

        newShortCut.name = dto.name;
        newShortCut.endpoint = dto.endpoint;
        newShortCut.selector = dto.selector;
        newShortCut.contractAddr = dto.contractAddr;
        newShortCut.shortCutsType = dto.shortCutsType;

        uint256 len = dto.userParams.length;
        for (uint256 i = 0; i < len; i += 1) {
            newShortCut.userParams.push(dto.userParams[i]);
        }
        _index = newIndex;
    }
}
