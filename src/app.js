import React from 'react';

import { Input, Textarea, Button, Navbar, NavItem, Select, SelectOption, Card } from '../src/lib/atomix';

export default props => {

    return (
        <div>
            <Navbar icon='https://ffp4g1ylyit3jdyti1hqcvtb-wpengine.netdna-ssl.com/firefox/files/2017/12/firefox-logo-300x310.png'>
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

            </div>
        </div>
    )
}