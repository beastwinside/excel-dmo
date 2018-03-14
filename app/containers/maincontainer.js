import React,{Component} from 'react'
import styles from '../styles/maincontainer.css';//导入
import { Carousel } from 'antd';
import { Collapse } from 'antd';
import { Tabs } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';
import { List, Card,Table} from 'antd';

const columns = [{
	title: 'Name',
	dataIndex: 'name',
}, {
	title: 'Age',
	dataIndex: 'age',
}, {
	title: 'Address',
	dataIndex: 'address',
}];


const data0 = [];
for (let i = 0; i < 46; i++) {
	data0.push({
		key: i,
		name: `Edward King ${i}`,
		age: 32,
		address: `London, Park Lane no. ${i}`,
	});
}


const data = [
'field1 :value1',
'field2 :value2',
'field3 :value3',
'field4 :value4',
'field5 :value5',
'field6 :value6',



];


const data1=[{
	title: '1',
	content:'1'
},
{
	title: '2',
	content:'2'

},
{
	title: '3',
	content:'3'

},{
	title: '4',
	content:'4'

},{
	title: '5',
	content:'5'

},{
	title: '6',
	content:'6'

},];


const data2 =[
{
	title: 'ARRIVALAIRPORTs',
	content:'JFK'
},
{
	title: 'WAYBILLORIGINATOR',
	content:'1'

},
{
	title: 'AIRLINEPREFIX',
	content:'784'

},
{
	title: 'AWBSERIALNUMBER',
	content:'12345678'
},
{
	title: 'HOUSEAWB',
	content:'12345'
},
{
	title: 'MASTERAWBINDICATOR',
	content:'3'

},
{
	title: 'ORIGINAIRPORT',
	content:'CAN'

},
{
	title: 'PIECES',
	content:'1'

},
{
	title: 'WEIGHTCODE',
	content:'K'

},
{
	title: 'WEIGHT',
	content:'1.5'

},
{
	title: 'DESCRIPTION',
	content:'GARMENT'

},
{
	title: 'FDAINDICATOR',
	content:'&nbsp'

},
{
	title: 'IMPORTINGCARRIER',
	content:'CZ'

},
{
	title: 'FLIGHTNUMBER',
	content:'699'

},
{
	title: 'ARRIVALDAY',
	content:'1-Jan'

},
{
	title: 'ARRIVALMONTH ',
	content:'JAN'

},
{
	title: 'SHIPPERNAME',
	content:'SHIPPER1'

},
{
	title: 'SHIPPERSTREETADDRESS',
	content:'ADDRESS'

},
{
	title: 'SHIPPERCITY',
	content:'GUANGZHOU'

},
{
	title: 'SHIPPERSTATEORPROVINCE',
	content:'null'

},
{
	title: 'SHIPPERPOSTALCODE',
	content:'null'

},
{
	title: 'SHIPPERCOUNTRY',
	content:'CN'

},
{
	title: 'SHIPPERTELEPHONE',
	content:'null'

},
{
	title: 'CONSIGNEENAME',
	content:'CNEE1'

},
{
	title: 'CONSIGNEESTREETADDRESS',
	content:'ADDRESS'

},
{
	title: 'CONSIGNEECITY',
	content:'USA CITY'

},
{
	title: 'CONSIGNEESTATEORPROVINCE',
	content:'STATE'

},
{
	title: 'CONSIGNEEPOSTALCODE',
	content:'null'

},
{
	title: 'CONSIGNEECOUNTRY',
	content:'null'

},
{
	title: 'AMENDMENTFLAG',
	content:'A'

},
{
	title: 'AMENDMENTCODE',
	content:'21'

},
{
	title: 'AMENDMENTREASON',
	content:'null'

},
{
	title: 'PTPDESTINATION',
	content:'null'

},
{
	title: 'PTPDESTINATIONDAY',
	content:'null'

},
{
	title: 'PTPDESTINATIONDAY',
	content:'null'

},
{
	title: 'PTPDESTINATIONMONTH',
	content:'null'

},
{
	title: 'BOARDEDPIECES',
	content:'null'

},
{
	title: 'BOARDEDWEIGHTCODE',
	content:'null'

},
{
	title: 'BOARDEDWEIGHT',
	content:'null'

},
{
	title: 'PARTIALSHIPMENTREF',
	content:'null'

},
{
	title: 'BROKERCODE',
	content:'null'

},
{
	title: 'INBONDDESTINATION',
	content:'null'

},
{
	title: 'INBONDDESTINATIONTYPE',
	content:'null'

}
,
{
	title: 'BONDEDCARRIERID',
	content:'null'

}
,
{
	title: 'INBONDDESTINATION',
	content:'null'

}
,
{
	title: 'ONWARDCARRIER',
	content:'null'

}
,
{
	title: 'BONDEDPREMISESID',
	content:'null'

}
,
{
	title: 'TRANSFERCONTROLNUMBER',
	content:'null'

}
,
{
	title: 'ENTRYTYPE',
	content:'null'

}
,
{
	title: 'ENTRYNUMBER',
	content:'null'

}
,
{
	title: 'COUNTRYOFORIGIN',
	content:'CN'

}
,
{
	title: 'CUSTOMSVALUE',
	content:'VALUE'

}
,
{
	title: 'CURRENCYCODE',
	content:'USD'

}
,
{
	title: 'HTSNUMBER',
	content:'null'

}
,
{
	title: 'EXPRESSRELEASE',
	content:'y'

}
,
{
	title: 'BAG',
	content:'null'

}


];









const { TextArea } = Input;
const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;

function callback(key) {
	console.log(key);
}

const buttonName = "<div> 1312</div>";

class Maincontainer  extends Component{
	constructor(props){
		
		super(props);
		this.state={
			selectedRowKeys: [],
			loading: false
		}
		this.start=this.start.bind(this);
		this.onSelectChange=this.onSelectChange.bind(this)

	}


	start(){
		this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
    	this.setState({
    		selectedRowKeys: [],
    		loading: false,
    	});
    }, 1000);
}
onSelectChange(selectedRowKeys){
	console.log('selectedRowKeys changed: ', selectedRowKeys);
	this.setState({ selectedRowKeys });
}



render(){

	const { loading, selectedRowKeys } = this.state;
	const rowSelection = {
		selectedRowKeys,
		onChange: this.onSelectChange,
	};
	const hasSelected = selectedRowKeys.length > 0;

	return(

		<div  className={styles.container}>



		<div  className={styles.middle_area} >

		<Tabs type="card"  tabBarGutter="0px" size="large">
		<TabPane tab="type1" key="1">
		<List 

		size="middle"
		grid={{ gutter: 16, xs: 2, sm: 2, md: 4, lg: 4, xl: 8, xxl: 5
		}}
		dataSource={data1}
		renderItem={item => (
			<List.Item>
			<div style={{backgroundColor:'#FF6C9E',margin:'10px;',height:'20rem',fontSize:'1rem',color:'#F5CD37'}}>

			<li style={{color:'#F5CD37'}}>filed1:value1</li>
			<li>filed2:value2</li>
			<li>filed3:value3</li>
			<li>filed4:value4</li>
			<li>filed5:value5</li>
			<li>filed6:value6</li>
			<li>filed7:value7</li>
			<li>filed8:value8</li>
			<li>filed9:value9</li>
			<li>filed10:value10</li>
			<li>filed11:value11</li>
			<li>filed12:value12</li>
			<li>filed13:value13</li>

			</div>
			</List.Item>
			)}
		/>

		</TabPane>



		<TabPane tab="type2" key="2">

		<List 

		size="middle"
		grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 8, xxl: 5
		}}
		dataSource={data2}
		renderItem={item => (
			<List.Item>
			<Card title={item.title}>{item.content}</Card>
			</List.Item>
			)}
		/>
		</TabPane>

		<TabPane tab="type3" key="3">
		<List 

		size="middle"
		grid={{ gutter: 16, xs: 3, sm: 2, md: 4, lg: 4, xl: 8, xxl: 5
		}}
		dataSource={data1}
		renderItem={item => (
			<List.Item>
			<div style={{backgroundColor:'#FF6C9E',margin:'10px;',height:'20rem',fontSize:'1rem'}}>

			<List

			bordered
			dataSource={data}
			renderItem={item => (<List.Item>{item}</List.Item>)}
			/>



			</div>
			</List.Item>
			)}
		/>
		</TabPane>
		<TabPane tab="type4" key="4">

		<Tabs defaultActiveKey="1" onChange={callback}>
		<TabPane tab=" -1-" key="1">
		<li>filed1:value1</li>
		<li>filed2:value2</li>
		<li>filed3:value3</li>
		


		</TabPane>
		<TabPane tab=" -2-" key="2">
		<li>filed4:value4</li>
		<li>filed5:value5</li>
		<li>filed6:value6</li>
		<li>filed7:value7</li>

		</TabPane>
		<TabPane tab=" -3-" key="3">
		<li>filed8:value8</li>
		<li>filed9:value9</li>
		<li>filed10:value10</li>
		<li>filed11:value11</li>
		<li>filed12:value12</li>
		<li>filed13:value13</li>

		</TabPane>
		<TabPane tab=" -4-" key="4">
		<li>filed8:value8</li>
		<li>filed14:value14</li>
		<li>filed15:value15</li>
		<li>filed16:value16</li>
		<li>filed17:value17</li>
		<li>filed18:value18</li>

		</TabPane>
		</Tabs>



		</TabPane>
		<TabPane tab="type5" key="5">
		<div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            Reload
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
		
		</TabPane>
		<TabPane tab="type6" key="6">
		</TabPane>
		<TabPane tab="type7" key="7">
		</TabPane>
		<TabPane tab="type8" key="8">
		</TabPane>

		</Tabs>



		</div>

		<div  className={styles.right_area} >


		</div>
		</div>


		);
}

}

export default Maincontainer