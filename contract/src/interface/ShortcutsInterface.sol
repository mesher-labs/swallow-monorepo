pragma solidity 0.8.11;

interface ShortcutsInterface {
    struct UserParams {
        string name;
        string value;
    }

    /// @dev selector and contractAddr is only for ShortCutType.Transaction
    struct ShortCut {
        string name;
        string endpoint;
        string selector;
        address contractAddr;
        UserParams[] userParams;
        string shortCutsType;
    }

    function getAllShortCuts() external view returns (ShortCut[] memory);

    function getShortCutByIndex(uint256 index) external view returns (ShortCut memory);

    function addShortCut(ShortCut memory dto) external;
}
