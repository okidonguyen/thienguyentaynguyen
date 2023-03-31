import HrLine from '../HrLine';

const TitleHeader = ({ title }) => {
    <HrLine />;
    return (
        <>
            <HrLine />
            <h2 style={{padding:"5px", textAlign:"center"}}>{title}</h2>
            <HrLine />
            <br />
        </>
    );
};

export default TitleHeader;
