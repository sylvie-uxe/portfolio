import React from "react";
import {Link} from "gatsby";
import {handleClick} from "../utils/dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

function WorkHeader() {
    return (
        <header id="work-header">
            <Link to="/#work" onClick={handleClick} aria-label="Go back to work">
                <FontAwesomeIcon icon={faArrowCircleLeft} size="2x" />
            </Link>
        </header>
    );
}

export default WorkHeader;