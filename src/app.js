import React from 'react';

import { Input, Textarea, Button, Navbar, NavItem } from '../src/lib/atomix';

export default props => {

    return (
        <div>
            <Navbar>
                <NavItem link='http://www.facebook.com' blankTarget={true} text='Facebook' />
                <NavItem link='http//www.linkedin.com' blankTarget={true} text='Linkedin' />
                <NavItem link='http://www.github.com' blankTarget={true} text='github' />
            </Navbar>

            <Input
                type='password'
                placeholder='Placeholder'
                value='Value'
            />

            {/* <Textarea
                type='text'
                placeholder='Placeholder'
                value='Value'
            /> */}

            <Button onClick={() => alert('cu')} text='cu' />

        </div>
    )
}