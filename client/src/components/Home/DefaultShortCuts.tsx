import styled from "styled-components";
import { ShortcutTypes } from "./HomePresenter";

interface DefaultShortcutsProps {
  shortcutType: ShortcutTypes;
}

export const DefaultShortcuts = ({ shortcutType }: DefaultShortcutsProps) => {
  return (
    <Container>
      <h1>{shortcutType}</h1>
    </Container>
  );
};

const Container = styled.div`
  h1 {
  }

  h2 {
  }
`;
