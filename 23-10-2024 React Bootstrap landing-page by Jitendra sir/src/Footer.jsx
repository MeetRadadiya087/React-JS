import React, { useState } from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';


export default function Footer() {
  return (
    <div>
      <Card className="my-2" style={{
          width: '18rem'
        }}
      >
        <CardHeader>
          Header
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">
            Special Title Treatment
          </CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button>
            Go somewhere
          </Button>
        </CardBody>
        <CardFooter>
          Footer
        </CardFooter>
      </Card>
    </div>
  )
}
