import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  // deploy Shortcuts contract
  const Shortcuts = await deploy("Shortcuts", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  console.log("Deployed Contract: Shortcuts 🥰");
  console.log("Contract Address: ", Shortcuts.address);
};

export default func;

func.tags = ["deploy_contract"];
