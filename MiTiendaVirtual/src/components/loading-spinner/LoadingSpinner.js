import React from 'react';
import './LoadingSpinner.scss'

export default function LoadingSpinner({ message }) {
    return (
        <div className="flex flex-column flex-horizontal-center flex-vertical-center flex-expand message-container safety-wrapper">
            <div class="loader"></div>
            <span>{message}</span>
        </div>
    )
}