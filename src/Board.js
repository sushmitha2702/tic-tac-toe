import React from 'react'
import Square from './Square';

class Board extends React.Component {
    renderSquare(i) {
        console.log("rendering");
        return (
            <Square
                key= {i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                currentSelectionIndex={this.props.currentSelectionIndex === i ? this.props.currentSelectionIndex : null}
                currentSelectionBgColor={this.props.currentSelectionBgColor}
            />
        );
    }

    render() {
        return (
            <div>
                {
                    [0, 1, 2].map(row => {
                        return (
                            <div className="board-row">
                                {
                                    [0, 1, 2].map(col => {
                                        return this.renderSquare(row * 3 + col)
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Board;