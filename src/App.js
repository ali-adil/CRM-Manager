import FormItem from 'antd/es/form/FormItem';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import './App.css';
import {Form ,Avatar,Button} from 'antd';
import InputAnt from './Componetns/Input/Index';
import LoginBtn from './Componetns/Button/Index';
import Sidebar from './Componetns/Sidebar/Index';
import MenuTab from './Componetns/Tab/Index';
import TableComponent from './Componetns/Table/Index';
import Link from 'antd/es/typography/Link';

const tabItems = [
  { label: 'Dashboard', key: 'dashboard' },
  { label: 'Planner', key: 'planner' },
  { label: 'Messages', key: 'messages' },
  { label: 'Settings', key: 'settings' },
  { label: 'Help Center', key: 'help-center' },
];


const tableData = [
  {
    key: '1',
    partnerName:(
    <>
      <Avatar src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      Michaela Jackson 
    </>
    ), 

    email: 'jackson@gmail.com',
    phoneNumber: '+55 958 858 5556',
    status:(
      <Button className="bg-emerald-200 text-green-700 font-semibold" type="default">Active</Button>
    )
  },

  {
    key: '2',
    partnerName:(
      <>
        <Avatar src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600" />
        Joe Van Houser
      </>
    ) ,
    email: 'piece.holder@gmail.com',
    phoneNumber: '+55 654 555 6585',
    status:(
      <Button className="bg-emerald-200 text-green-700 font-semibold" type="default">Active</Button>
    )
  },

  {
    key: '3',
    partnerName: (
      <>
        <Avatar src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        Mr.Beard
      </>
    ),
    
    email: 'mrbread@gamil.com',
    phoneNumber: '+44 333 555 1235',
    status:(
      <Button className="bg-emerald-200 text-green-700 font-semibold" type="default">Active</Button>
    )
  },

  {
    key: '4',
    partnerName: (
      <>
        <Avatar src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600" />
        Janette Jackson
      </>
    ),
    
    email: 'janette@gmail.com',
    phoneNumber: '+44 555 555 4444',
    status:(
      <Button className="bg-emerald-200 text-green-700 font-semibold" type="default">Active</Button>
    )
  },

  {
    key: '5',
    partnerName: (
      <>
        <Avatar src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        Ariana Samaller
      </>
    ),
    email: 'arianasamaller@gmail.com',
    phoneNumber: '+55 555-555-5555',
    status:(
      <Button className="bg-emerald-200 text-green-700 font-semibold" type="default">Active</Button>
    )
  },

  {
   key: '6',
    partnerName: (
      <>
        <Avatar src="https://images.pexels.com/photos/16259514/pexels-photo-16259514/free-photo-of-a-woman-is-driving-a-car-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        Inita Interestellar
      </>
    ),
    email: 'inita@gmail.com',
    phoneNumber: '+55 885-885-7784',
    status:(
      <Button className="bg-emerald-200 text-green-700 font-semibold" type="default">Active</Button>
    )
  },
];

const tableColumns = [
  {
    title: 'Partner Name',
    dataIndex: 'partnerName',
    key: 'partnerName',
  },
  {
    title: 'Email Address',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];


function App() {
  return (
      <>
      <div className="flex flex-auto">
      <Sidebar></Sidebar>
      <div className="flex flex-col">
      <MenuTab tabItems={tabItems}></MenuTab>
      <TableComponent data={tableData} columns={tableColumns} ></TableComponent>
      </div>
        

      </div>
        
      
      

      <div className="container">
          <Form className="form">
            <FormItem>
              <h2 className="text-2xl font-semibold text-center text-gray-800 leading-[3.5rem] bg-slate-400 rounded-t-lg mb-4">Log In</h2>
              <p className="text-center text-gray-500 mb-6">Welcome, introduce your credentials to begin.</p>
              <InputAnt placeholder={"Email Address"} type={"Email"} size={"large"} prefix={<MailOutlined />} />
              <InputAnt placeholder={"Password"} size={"large"} prefix={<LockOutlined />} />
              <LoginBtn />
              <div className="text-center mt-2" >
              <span className="font-bold">Forgot your password? <Link href="www.$.com" className="text-blue-500"> Click here</Link></span>
              </div>
            </FormItem>
          </Form>
      </div>
           
    </>
  );
}

export default App;