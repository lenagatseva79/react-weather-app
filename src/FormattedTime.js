import React from "react";

export default function FormattedTime(props) {
    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return (
    <div>
        {hours}:{minutes}
    </div>
        );
}