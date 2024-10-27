import { Tooltip } from 'react-tooltip';

interface IconWithTooltipProps {
    url: string;
    Icon: React.ComponentType<{ className?: string }>;
    label: string;
}

const IconWithTooltip: React.FC<IconWithTooltipProps> = ({ url, Icon, label }) => {
    return (
        <div className="relative inline-block hover:text-gray-500 transition-colors">
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                data-tooltip-id={label} // Asocia el tooltip al ID
                data-tooltip-content={label} // Contenido del tooltip
            >
                <Icon className="h-6 w-6" />
                <span className="sr-only">{label}</span>
            </a>
            <Tooltip id={label} place="top" />
        </div>
    );
};

export default IconWithTooltip;

