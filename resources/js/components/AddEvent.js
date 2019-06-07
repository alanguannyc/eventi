import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import {
    Form,
    Input,
    Tag,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    DatePicker
  } from 'antd';
import {ReminderOptions} from './ReminderOptions';
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  const { Option } = Select;
export default class AddEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            date:"",
            description:"",
            address:"",
            reminder:"",
            showOrganizer: true,
        };
    }
    onChange = (name, event) => {

        this.setState({
            [name] : event.target.value
        })
    }
    onReminderChange = (value) => {
        this.setState({
            reminder : value
        })
    }
    onTimeChange = (value, dateString) => {
        if(dateString) {
            this.setState({date: dateString})
        }
        
      }
      
    onOk = (value, dateString) => {


        // this.setState({date: dateString})
    }

    onBlur = () => {
    console.log('blur');
    }
    
    onFocus = () => {
    console.log('focus');
    }
    
    onSearch = (val) => {
    console.log('search:', val);
    }
    onClick = () => {
        console.log('clicked')
        this.setState({showOrganizer: false})
    }

    render() {
        const btnStyle = {
            "marginRight" : "5px",
        }
  
      return (
        <div>
        <h2>Create Event</h2>
        <Form>
        <Input required placeholder="Name of the event" onChange={this.onChange.bind(this,'title')} value={this.state.title} />
        {/* Data and Time picker  */}
        <Form.Item label="Date & Time" required>
            <RangePicker
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
            placeholder={['Start Time', 'End Time']}
            onChange={this.onTimeChange}
            onOk={this.onOk}
            />
            </Form.Item>
        <div>
            <TextArea rows={4} placeholder="Description of the event" onChange={this.onChange.bind(this,'description')} value={this.state.description} />
        </div>
            <Input placeholder="Location" onChange={this.onChange.bind(this,'address')} value={this.state.address} />
       
        {/* Option of reminder  */}
        <Form.Item label="Reminder">
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder="No Reminder"
            optionFilterProp="children"
            onChange={this.onReminderChange}
            onFocus={this.onFocus}
            onBlur= {this.onBlur}
            onSearch= {this.onSearch}
            filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {ReminderOptions.map(option => {
                if (option < 60) {
                    return <Option key={option} value={option + "minutes"}>{option} minutes</Option>
                } else if (option >= 60 && option < 1440 ) {
                    return <Option key={option} value={option}>{option/60} hours</Option>
                } else {
                    return <Option key={option} value={option}>{option/1440} days</Option>
                }
            }
                
        )}
        </Select>
        </Form.Item>
        
        
            <div>
                <Button type="primary" style = {btnStyle} >Create</Button>
                <Button>Cancel</Button>
            </div>
        </Form>

        <span onClick = {this.onClick} style={this.state.showOrganizer ? {} : { display: 'none' }} >Organizer</span>
        </div>
      )

      }

        
    }       
      
  


if (document.getElementById('app')) {
    ReactDOM.render(<AddEvent />, document.getElementById('app'));
}

