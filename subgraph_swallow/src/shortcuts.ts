import { AddShortCutCall } from "../generated/Shortcuts/Shortcuts";
import { ShortCut } from "../generated/schema";

export function handleAddShortCut(call: AddShortCutCall): void {
  const id = call.transaction.hash.toHex();
  const shortCut = new ShortCut(id);
  shortCut.name = call.inputs.dto.name;
  shortCut.endpoint = call.inputs.dto.endpoint;
  shortCut.selector = call.inputs.dto.selector;
  shortCut.contractAddr = call.inputs.dto.contractAddr;
  shortCut.shortCutsType = call.inputs.dto.shortCutsType;
  // shortCut.userParams = call.inputs.dto.userParams
  // TODO: add userParams

  shortCut.save();
}
