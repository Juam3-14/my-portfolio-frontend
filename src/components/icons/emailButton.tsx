import React from 'react';
import { Tooltip } from 'react-tooltip';

interface EmailIconButtonProps {
    email: string;
    subject?: string;
    body?: string;
    Icon: React.ComponentType<{ className?: string }>;
    label: string;
}

const EmailIconButton: React.FC<EmailIconButtonProps> = ({ email, subject = '', body = '', Icon, label }) => {
    const handleClick = () => {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank');
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={handleClick}
                data-tooltip-id={label}
                data-tooltip-content={label}
                className="hover:text-gray-500 transition-colors"
                aria-label={label}
            >
                <Icon className="h-6 w-6" />
                <span className="sr-only">{label}</span>
            </button>
            <Tooltip id={label} place="top" />
        </div>
    );
};

export default EmailIconButton;
