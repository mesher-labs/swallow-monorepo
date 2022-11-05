pragma solidity 0.8.11;

interface ShortcutsInterface {
    struct UserParams {
        string name;
        string value;
    }

    /// @dev selector and contractAddr is only for ShortCutType.Transaction
    struct ShortCutsDto {
        string id;
        string name;
        string endpoint;
        string selector;
        address contractAddr;
        UserParams[] userParams;
        string shortCutsType;
    }

    function getAllShortCuts() external view returns (ShortCutsDto[] memory shortcuts);

    function getShortCutsWithID(string memory id) external view returns (ShortCutsDto memory shortcuts);

    function addShortCuts(ShortCutsDto memory shortcut) external;
}
