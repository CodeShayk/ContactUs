import '../App.css'
import {Component} from "react";
import {Project} from "./Project";

export class ProjectGrid extends Component {
    render() {
       return (
            <div className="projects-grid">
                {this.props.projects.map((project) => {
                    return (
                        <Project project={project} key={project.id}/>
                    )
                })}
            </div>
        )
    }
}