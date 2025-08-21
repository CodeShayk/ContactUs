import '../App.css'
import {Component} from "react";

export class Footer extends Component {
    render() {
       const copyright = this.props.copyright;
        return (
            <>
                <footer>
                    <p>{copyright.disclaimer}</p>
                </footer>
            </>
        );
    }
}

