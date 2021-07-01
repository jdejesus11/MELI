import React from 'react';
import './ErrorMessage.scss';
import ErrorIcon from '../icons/ErrorIcon';

export default function ({ message }) {
    return (
        <div className={"flex flex-column flex-horizontal-center flex-vertical-center flex-expand message-container safety-wrapper"}>
            <section className="flex flex-column flex-horizontal-center flex-vertical-center flex-expand message-body">
                <div className="message-grid">
                    <div className="flex flex-column flex-horizontal-center flex-vertical-center flex-expand">
                        <ErrorIcon />
                    </div>
                    <span className="message-title message__text-center">{message}</span>
                </div>
            </section>
        </div>
    )
}