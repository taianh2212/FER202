import React from 'react';
import Welcome from './components/Welcome';
import UserProfile from './components/UserProfile';
import NameList from './components/NameList';
import StudentCard from './components/StudentCard';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const userData = { name: 'traltb@fe.edu.vn', age: 39 };
  const namesList = ['traltb@fe.edu.vn', 'test@fe.edu.vn'];
  const students = [
    { name: 'traltb1@fe.edu.vn', age: 39,Diachi: 'DaNang' ,avatar: '/images/student1.jpg' },
    { name: 'traltb2@fe.edu.vn', age: 40,Diachi: 'ha noi' , avatar: '/images/student2.jpg' },
    { name: 'traltb3@fe.edu.vn', age: 41,Diachi: 'hcm' , avatar: '/images/student3.jpg' },
  ];

  return (
    <>
      <Welcome name="traltb@fe.edu.vn" />
      <UserProfile user={userData} />
      <NameList names={namesList} />

      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
