// src/components/Hello.tsx

import * as React from "react";
import "./styles.css";

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
}

interface IState {
  currentEnthusiasm: number;
}

class Hello extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      currentEnthusiasm: props.enthusiasmLevel || 1
    };
  }

  public onDecrement = () => {
    this.setState({
      currentEnthusiasm: this.state.currentEnthusiasm - 1
    });
  };

  public onIncrement = () => {
    this.setState({
      currentEnthusiasm: this.state.currentEnthusiasm + 1
    });
  };

  public render() {
    const { name } = this.props;
    const { currentEnthusiasm } = this.state;

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(currentEnthusiasm)}
        </div>
        <button onClick={this.onDecrement}> &ndash;</button>
        <button onClick={this.onIncrement}> + </button>
      </div>
    );
  }
}

export default Hello;

// helpers
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
