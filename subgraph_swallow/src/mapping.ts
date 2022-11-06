import { AddShortcut, SetIsReady } from "../generated/Shortcuts/Shortcuts";
import { Shortcut, UserParam } from "../generated/schema";
import { log } from "@graphprotocol/graph-ts";

export function handleAddShortcut(event: AddShortcut): void {
  const blockNum = event.params.blockNum.toString();
  log.debug("AddShortcut EventHandler blockNum={}", [blockNum]);
  const shortcutId = event.params.index.toString();
  const eventUserParams = event.params.newShortcut.userParams;

  for (let i = 0; i < eventUserParams.length; i++) {
    const paramId = shortcutId.concat("-").concat(i.toString());
    let userParam = new UserParam(paramId);
    userParam.name = eventUserParams[i].name;
    userParam.value = eventUserParams[i].value;
    userParam.shortcut = shortcutId;
    userParam.save();
  }

  let shortcut = new Shortcut(shortcutId);
  shortcut.index = event.params.index;
  shortcut.endpoint = event.params.newShortcut.endpoint;
  shortcut.contractAddr = event.params.newShortcut.contractAddr;
  shortcut.shortcutType = event.params.newShortcut.shortcutType;
  shortcut.isReady = event.params.newShortcut.isReady;
  shortcut.save();
  log.debug("saved shortcut shortcutId={}", [shortcutId]);
}

export function handleSetIsReady(event: SetIsReady): void {
  let id = event.params.index.toString();
  let shortcut = Shortcut.load(id);
  if (shortcut === null) {
    log.warning("no shortcut found for id={}", [id]);
    return;
  }

  shortcut.isReady = event.params.newIsReady;
  shortcut.save();
  log.debug("saved shortcut id={}", [id]);
}
