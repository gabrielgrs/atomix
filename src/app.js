import React from 'react';

import { Input, Textarea, Button, Navbar, NavItem, Select, SelectOption, Card, Table, TableRow, Footer, FooterBottom, } from '../src/lib/atomix';

export default props => {

    return (
        <div>
            <Navbar brand='Atomix' icon='https://ffp4g1ylyit3jdyti1hqcvtb-wpengine.netdna-ssl.com/firefox/files/2017/12/firefox-logo-300x310.png'>
                <NavItem link='http://www.facebook.com' blankTarget={true} text='Facebook' />
                <NavItem link='http//www.linkedin.com' blankTarget={true} text='Linkedin' />
                <NavItem link='http://www.github.com' blankTarget={true} text='github' />
            </Navbar>


            <div className='container'>

                <Input
                    type='password'
                    style='primary'
                    placeholder='Placeholder'
                    value='Value'
                />

                <Button style='primary' onClick={() => alert('Botão acionado com sucesso')} text='Teste' />

                <div>
                    <Textarea
                        type='text'
                        placeholder='Placeholder'
                        value='Value'
                    />
                </div>

                <Select>
                    <SelectOption value='Valor' text='Texto' />
                </Select>

                <Card
                    img='https://conteudo.imguol.com.br/c/entretenimento/c4/2018/05/15/super-mario-odyssey-1526426783086_v2_1170x540.jpgx'
                    title='Título'
                    subtitle='Subtitle'
                    content='Eu sou um content, estou sendo testado. Eu sou um content, estou sendo testado. Eu sou um content, estou sendo testado. '
                    footer='Meu footer'
                />

                <Table headers={['FirstName', 'Second Name', 'Third Name', 'Random', 'Food',]}>
                    <TableRow values={['Polenta', 'com', 'ceva', 'mais', 'tarde?']} />
                    <TableRow values={['4', '5', '7', '123', 'batata']} />
                </Table>

            </div>


            <Footer
                firstContent={`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `}

                secondContent={`
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `}
            >

                <FooterBottom content='Meu cu de paraquedas eu sou o copyright maneiro _|_' />
            </Footer>
        </div>
    )
}