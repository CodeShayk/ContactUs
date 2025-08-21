import '../App.css'
import {Component} from "react";

export class Header extends Component {

    render() {
        return (
            <>
                <header>
                    <h1>{this.props.developer.name}</h1>
                    <p className="subtitle">{this.props.developer.description}</p>
                    <div className="profile-links">{this.props.developer.links.map((link) =>
                        <a href={link.href} className="profile-link" target="_blank">
                            <span>{link.icon}</span>
                            {link.title}
                        </a>
                    )}</div>
                </header>
            </>
        );
    }
}
