import React from 'react';
// import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
// import HTMLReactParser from 'html-react-parser';


// import { useGetExchangesQuery } from '../services/cryptoApi';

// const { Panel } = Collapse;
const { Text } = Typography;

const Exchanges = () => {
// const {data, isFetching} = useGetExchangesQuery();
// const exchangesList = data?.data?.exchanges;

// if(isFetching) return 'Loading...';

// console.log('exchange', exchangesList)

  return (
    <>
    <Row>
      <Col span={6}>Exchanges</Col>
      <Col span={6}>24h Trade Volume</Col>
      <Col span={6}>Markets</Col>
      <Col span={6}>Change</Col>
    </Row>
    <br/>
    <Row>
      <Col ><strong>This Part is Under Development</strong></Col>
    </Row>
    {/* <Row>
      {exchangesList.map((exchanges)=>(
        <Col span={24}>
          <Collapse>
            <Panel key={exchanges.uuid} showArrow={false} header={(
              <Row key={exchanges.uuid}>
                <Col span={6}>
                  <Text><strong>{exchanges.rank}.</strong></Text>
                  <Avatar className='exchange-image' src={exchanges.iconUrl} />
                  <Text><strong>{exchanges.name}</strong></Text>
                </Col>
                <Col span={6}>${millify(exchanges.volume)}</Col>
                <Col span={6}>{millify(exchanges.numberOfMarkets)}</Col>
                <Col span={6}>{millify(exchanges.marketShare)}%</Col>
              </Row>
            )}
            >
              {HTMLReactParser(exchanges.description || '')}
              </Panel>
          </Collapse>
        </Col>
      ))}
    </Row> */}
    </>
  );
};

export default Exchanges;
