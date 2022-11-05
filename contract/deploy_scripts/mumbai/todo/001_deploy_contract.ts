import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  // deploy ShortCuts contract
  const ShortCuts = await deploy("ShortCuts", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  console.log("Deployed Contract: ShortCuts 🥰");
  console.log("Contract Address: ", ShortCuts.address);
};

export default func;

func.tags = ["deploy_contract"];
