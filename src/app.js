import React from 'react';

import {
    Input, Textarea, Button,
    Navbar, NavItem, Select,
    SelectOption, Card, Table,
    TableRow, Footer, FooterBottom,
    Modal,
} from '../src/lib/atomix';

export default props => {

    return (
        <div>
            <Navbar brand='Atomix' icon='https://static1.squarespace.com/static/54e4ede1e4b012fa4a38638c/t/5b96a82a0e2e72baf585cc78/1536600122199/Atom.png'>
                <NavItem link='http://www.facebook.com' blankTarget={true} text='Facebook' />
                <NavItem link='http://www.linkedin.com' blankTarget={true} text='Linkedin' />
                <NavItem link='http://www.github.com' blankTarget={true} text='github' />
            </Navbar>


            <div className='container'>

                <div className='container'>

                    <Modal
                        name='firstModal'
                        text='Botão da Modal'
                        style='primary'
                        title='Titulo'
                        content='Olá, eu sou uma modal linda pra caramba =D'
                    />

                    <Modal
                        name='secondaModal'
                        text='Botão da Modal 2'
                        style='primary'
                        title='Titulo'
                        content='Mensagem da modal'
                    />
                </div>

                <div className='vertical-content'>
                    <Input
                        type='password'
                        placeholder='Placeholder'
                        value='Value'
                    />

                    <Input
                        type='number'
                        placeholder='Placeholder'
                        value='Value'
                    />
                </div>

                <Button style='primary' onClick={() => alert('Botão acionado com sucesso')} text='Teste' />
                <Button style='primary' onClick={() => alert('Botão acionado com sucesso')} text='Teste' />
                <Button style='warning' onClick={() => alert('Botão acionado com sucesso')} text='Teste' />
                <Button onClick={() => alert('Botão acionado com sucesso')} text='Teste' />

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

                <div className='content horizontal-content'>
                    <Card
                        img='https://conteudo.imguol.com.br/c/entretenimento/c4/2018/05/15/super-mario-odyssey-1526426783086_v2_1170x540.jpgx'
                        title='Título'
                        subtitle='Subtitle'
                        content='Eu sou um content, estou sendo testado. Eu sou um content, estou sendo testado. Eu sou um content, estou sendo testado. '
                        footer='Meu footer'
                    />
                    <Card
                        img='https://conteudo.imguol.com.br/c/entretenimento/c4/2018/05/15/super-mario-odyssey-1526426783086_v2_1170x540.jpgx'
                        title='Título'
                        subtitle='Subtitle'
                        content='Eu sou um content, estou sendo testado. Eu sou um content, estou sendo testado. Eu sou um content, estou sendo testado. '
                        footer='Meu footer'
                    />
                    <Card
                        img='https://conteudo.imguol.com.br/c/entretenimento/c4/2018/05/15/super-mario-odyssey-1526426783086_v2_1170x540.jpgx'
                        title='Título'
                        subtitle='Subtitle'
                        content='Eu sou um content, estou sendo testado. Eu sou um content, estou sendo testado. Eu sou um content, estou sendo testado. '
                        footer='Meu footer'
                    />
                    <Card
                        img='https://conteudo.imguol.com.br/c/entretenimento/c4/2018/05/15/super-mario-odyssey-1526426783086_v2_1170x540.jpgx'
                        title='Título'
                        subtitle='Subtitle'
                        content='Eu sou um content, estou sendo testado. Eu sou um content, estou sendo testado. Eu sou um content, estou sendo testado. '
                        footer='Meu footer'
                    />
                    <Card
                        img='https://conteudo.imguol.com.br/c/entretenimento/c4/2018/05/15/super-mario-odyssey-1526426783086_v2_1170x540.jpgx'
                        title='Título'
                        subtitle='Subtitle'
                        content='Eu sou um content, estou sendo testado. Eu sou um content, estou sendo testado. Eu sou um content, estou sendo testado. '
                        footer='Meu footer'
                    />
                    <Card
                        img='https://conteudo.imguol.com.br/c/entretenimento/c4/2018/05/15/super-mario-odyssey-1526426783086_v2_1170x540.jpgx'
                        title='Título'
                        subtitle='Subtitle'
                        content='Eu sou um content, estou sendo testado. Eu sou um content, estou sendo testado. Eu sou um content, estou sendo testado. '
                        footer='Meu footer'
                    />
                    <Card
                        img='https://conteudo.imguol.com.br/c/entretenimento/c4/2018/05/15/super-mario-odyssey-1526426783086_v2_1170x540.jpgx'
                        title='Título'
                        subtitle='Subtitle'
                        content='Eu sou um content, estou sendo testado. Eu sou um content, estou sendo testado. Eu sou um content, estou sendo testado. '
                        footer='Meu footer'
                    />
                </div>


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