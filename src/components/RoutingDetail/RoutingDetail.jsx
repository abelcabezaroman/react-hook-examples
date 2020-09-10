import React from "react";
import { useParams } from "react-router-dom";

export default function RoutingDetail () {
    const { id } = useParams();
    return (
        <p>{id}</p>
    )
}
