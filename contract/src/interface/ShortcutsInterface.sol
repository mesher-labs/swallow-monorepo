pragma solidity 0.8.11;

interface ShortcutsInterface {
    struct UserParams {
        string name;
        string value;
    }

    /// @dev selector and contractAddr is only for ShortCutType.Transaction
    struct Shortcut {
        uint256 index;
        string shortcutType;
        string endpoint;
        address contractAddr;
        UserParams[] userParams;
        bool isReady;
    }

    event AddShortcut(uint256 indexed index, Shortcut newShortcut, uint256 blockNum);
    event SetIsReady(uint256 indexed index, bool newIsReady);

    function getAllShortcuts() external view returns (Shortcut[] memory);

    function getShortcutByIndex(uint256 index) external view returns (Shortcut memory);

    function addShortcut(
        string memory shortcutType,
        string memory endpoint,
        address contractAddr,
        UserParams[] memory userParams,
        bool isReady
    ) external returns (uint256);

    function setIsReady(uint256 index, bool newIsReady) external;
}
