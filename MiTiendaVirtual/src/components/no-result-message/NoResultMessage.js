import React from 'react';
import './NoResultMessage.scss';
import WarningIcon from '../icons/WarningIcon';

export default function ({ message}) {
    return (
        <div className={"flex flex-column flex-horizontal-center flex-vertical-center flex-expand message-container safety-wrapper"}>
            <section className="flex flex-column flex-horizontal-center flex-vertical-center flex-expand message-body">
                <div className="message-grid">
                    <div className="flex flex-column flex-horizontal-center flex-vertical-center flex-expand">
                        <WarningIcon />
                    </div>
                    <article>
                        <span className="message-title message__text-center">{message}</span>
                        <ul className="message-suggestions">
                            <li className="message-suggestions__suggestion message__text-center">
                                <strong>Revisa la ortografía</strong> de la palabra
                            </li>
                            <li className="message-suggestions__suggestion message__text-center">
                              Utiliza <strong>palabras más genéricas</strong> o menos palabras.
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
        </div>
    )
}