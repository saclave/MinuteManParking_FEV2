import { Row, Col } from 'antd';

const HeaderlessPageContent = ({ children }) => (
    <Row align="middle" className="headerless-page-content">
        <Col xs={{ span: 14, offset: 5 }}
            sm={{ span: 12, offset: 6 }}
            md={{ span: 10, offset: 7 }}
            lg={{ span: 8, offset: 8 }}
            xl={{ span: 6, offset: 9 }}>
            {children}
        </Col>
    </Row>
);

export default HeaderlessPageContent;