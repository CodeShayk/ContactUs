import '../App.css'
import {Component} from "react";

export class Project extends Component {
    render() {

        return (
            <div className="project-card">
                <div className="project-header">
                    <div className="project-icon">{this.props.project.icon}</div>
                    <h3 className="project-title">{this.props.project.name}</h3>
                </div>
                <p className="project-description">
                    {this.props.project.description}
                </p>
                <div className="tech-stack">
                    {this.props.project.tags.map((tag) => {
                        return (
                            <span className="tech-tag">{tag.name}</span>
                        )
                    })}
                </div>
                <div className="project-links">
                    {this.props.project.links.map((link) => {
                        return (
                            <a href={link.href} className="project-link" target="_blank">
                                <span>{link.icon}</span> {link.title}
                            </a>
                        )
                    })}
                </div>
            </div>
        );
    }
}