import React, { useEffect, useMemo, useState } from 'react'
import Data from "../Core/Data";
import { Card, Col,  Row } from 'react-bootstrap';

const Home = () => {

  const [dataList, setDataList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    setDataList(Data);
}, []);

function handleCategoryChange(event) {
  setSelectedCategory(event.target.value);
}

function getFilteredList() {
  if (!selectedCategory) {
    return dataList;
  }
  return dataList.filter((item) => item.tag === selectedCategory);
}

var filteredList = useMemo(getFilteredList, [selectedCategory, dataList]);


  return (
    <div>
      <Row>
      <div className="mx-3">
        <div>Filter by Tag:</div>
        <div>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Horse">Horse</option>
           
          </select>
        </div>
      </div>
       </Row>
       <div className="sport-list">
       <Row>
        {filteredList.map((data, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={4}>
          <Card className='rounded bg-white cards m-4' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.image} />
              <Card.Body className='text-dark'>
              <Card.Title>{data.tag}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        ))}
        </Row>
      </div>
    </div>
  )
}

export default Home