import {
    Box, Fade, Menu,
    MenuButton, MenuItem,
    MenuList, MenuItemOption, MenuOptionGroup, Text, Icon, Button
} from '@chakra-ui/react';
import {ChevronRightIcon, ChevronDownIcon} from '@chakra-ui/icons'
import { useState } from 'react';

const MenuFIlter = () => {
  const [activeMenu, setActiveMenu] = useState('main');

  return (
    <Menu closeOnSelect={false} overflow="hidden">
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Filtro
        </MenuButton>
        <MenuList overflow="hidden" position="relative">

            {/* CSSTransition - ActiveMenu - Main */}
            {activeMenu === 'main' && (
                <Fade in={activeMenu === 'main'}>
                    <Box as="div"> 
                    <MenuItem onClick={() => setActiveMenu('senioridade')}>
                        <Box w="100%" display="flex" alignItems="center" justifyContent="space-between">
                            <Text>Senioridade</Text>
                            <Icon as={ChevronRightIcon} />
                        </Box>
                    </MenuItem>
                    <MenuItem onClick={() => setActiveMenu('equipe')}>
                        <Box w="100%" display="flex" alignItems="center" justifyContent="space-between">
                            <Text>Equipe</Text>
                            <Icon as={ChevronRightIcon} />
                        </Box>
                    </MenuItem>
                    </Box>
                </Fade>

            )}
        

            {/* CSSTransition - ActiveMenu - Senioridade */}
            {activeMenu === 'senioridade' && (
                <Fade in={activeMenu === 'senioridade'} >
                    <Box as="div">
                        <MenuOptionGroup defaultValue='none' title='Senioridade' type='radio'>
                            <MenuItem onClick={() => setActiveMenu("main")}>Voltar</MenuItem>
                            <MenuItemOption value="aprendiz">Aprendiz</MenuItemOption>
                            <MenuItemOption value="junior">Junior</MenuItemOption>
                            <MenuItemOption value="pleno">Pleno</MenuItemOption>
                            <MenuItemOption value="senior">Senior</MenuItemOption>
                            <MenuItemOption value="especialista">Especialista</MenuItemOption>
                        </MenuOptionGroup>
                    </Box>
                </Fade>
            )}

            {/* CSSTransition - ActiveMenu - Equipe */}
            {activeMenu === 'equipe' && (
                <Fade in={activeMenu === 'equipe'}>
                    <Box as="div">
                        <MenuOptionGroup defaultValue='none' title='Equipe' type='radio'>
                            <MenuItem onClick={() => setActiveMenu("main")}>Voltar</MenuItem>
                            <MenuItemOption value="amarelo">Equipe Amarela</MenuItemOption>
                            <MenuItemOption value="azul">Equipe Azul</MenuItemOption>
                            <MenuItemOption value="vermelho">Equipe Vermelha</MenuItemOption>
                            <MenuItemOption value="preto">Equipe Preta</MenuItemOption>
                            <MenuItemOption value="verde">Equipe Verde</MenuItemOption>
                        </MenuOptionGroup>
                    </Box>
                </Fade>
            )}
            
        </MenuList>
    </Menu>
  )
}

export default MenuFIlter;