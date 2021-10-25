import { ILinkNewTap } from "@common/components/LinkNewTap/LinkNewTap.interface";

const LinkNewTap: React.FC<ILinkNewTap.IProps> = ({ children, url }) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            {children}
        </a>
    );
};

export default LinkNewTap;
