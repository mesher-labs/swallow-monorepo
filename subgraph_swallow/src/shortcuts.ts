import { AddShortCutCall } from "../generated/Shortcuts/Shortcuts";
import { ShortCut, UserParam } from "../generated/schema";

export function handleAddShortCut(call: AddShortCutCall): void {
  const shortCutId = call.transaction.hash.toHex();
  const shortCut = new ShortCut(shortCutId);

  call.inputs.dto.userParams.forEach(({ name, value }, index) => {
    const paramId = shortCutId + "-" + index;
    const userParam = new UserParam(paramId);
    userParam.name = name;
    userParam.value = value;
    userParam.shortcut = shortCutId;

    userParam.save();
  });

  shortCut.name = call.inputs.dto.name;
  shortCut.endpoint = call.inputs.dto.endpoint;
  shortCut.selector = call.inputs.dto.selector;
  shortCut.contractAddr = call.inputs.dto.contractAddr;
  shortCut.shortCutsType = call.inputs.dto.shortCutsType;

  shortCut.save();
}
