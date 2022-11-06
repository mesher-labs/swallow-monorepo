import { AddShortCutCall } from "../generated/Shortcuts/Shortcuts";
import { ShortCut, UserParam } from "../generated/schema";

export function handleAddShortCut(call: AddShortCutCall): void {
  const shortCutId = call.transaction.hash.toHex();
  const shortCut = new ShortCut(shortCutId);

  for (let i = 0; i < call.inputs.dto.userParams.length; i++) {
    const paramId = shortCutId.concat("-").concat(i.toString());
    const userParam = new UserParam(paramId);
    userParam.name = call.inputs.dto.userParams[i].name;
    userParam.value = call.inputs.dto.userParams[i].value;
    userParam.shortcut = shortCutId;

    userParam.save();
  }

  shortCut.name = call.inputs.dto.name;
  shortCut.endpoint = call.inputs.dto.endpoint;
  shortCut.selector = call.inputs.dto.selector;
  shortCut.contractAddr = call.inputs.dto.contractAddr;
  shortCut.shortCutsType = call.inputs.dto.shortCutsType;

  shortCut.save();
}
