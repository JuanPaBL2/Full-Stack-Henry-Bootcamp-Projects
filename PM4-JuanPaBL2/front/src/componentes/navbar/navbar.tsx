'use client'
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

//styles
import {Menu, MenuButton, MenuItem, Logo, Nav, ImageContainer, Img, SearchInput, SearchInputBurger, MenuItemCarrito, SearchContainer} from './stylo2'

export const Navbar:React.FC = (): React.ReactNode  => {

  const router = useRouter()

  const [token, setToken] = useState<string | null>(null) 
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState({item: ''});

  const logOut = () => {
    localStorage.removeItem("userToken")
    localStorage.removeItem("userData");
    Cookies.remove('token');
    if (window.location.href === 'http://localhost:3000/') {
      window.location.reload();
    } else {
      router.push("/");
    }
    setToken(null);
  }

  useEffect(() => {
    const storedToken = localStorage.getItem("userToken");
    setToken(storedToken);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearch({ ...search, [name]: value });
    console.log(search);
  }

  const itemSubmit = () => {
    const item = JSON.stringify(search)
    localStorage.setItem("itemCategory", item)
    setTimeout(() => {
      router.push("/productfilter")
    },300)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      itemSubmit();
    }
  };


  return (
    <Nav>
      <Logo>NexusTech</Logo>
      <MenuButton onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
      <SearchContainer>
        <SearchInput placeholder="buscar..." type="text" value={search.item} name="item" onChange={inputHandler} />
        <img onClick={itemSubmit} className=" sm:block h-12 cursor-pointer" src="https://picjj.com/images/2024/05/11/NnJG7.png" alt="images removebg preview" />
      </SearchContainer>   
      <Menu isOpen={isOpen}>
        <MenuItem >
          <Link href="/">HOME</Link>
        </MenuItem>
        {token ? (
            <>
            <MenuItem>
              <Link href="/userdashboard">MI CUENTA</Link>
            </MenuItem>
            <MenuItemCarrito>
              <ImageContainer>
                <Link href="/carritoview"><Img src='https://picjj.com/images/2024/05/07/VROGI.png' alt="s"/></Link>
              </ImageContainer> 
            </MenuItemCarrito>
            <MenuItem>
              <Link href="/" >
                <p onClick={logOut}>LOG OUT</p>
              </Link>
            </MenuItem>
            <SearchInputBurger placeholder="buscar..." type="text" name="item" value={search.item} onChange={inputHandler} isOpen={isOpen} onKeyDown={handleKeyPress}/>
            </>
        ) : (
          <>
            <MenuItem> 
              <Link href="/login">LOG IN</Link>
            </MenuItem>
            <MenuItem> 
              <Link href="/register">REGISTER</Link>
            </MenuItem>
            <SearchInputBurger placeholder="buscar..." type="text" name="item" value={search.item} onChange={inputHandler} isOpen={isOpen} onKeyDown={handleKeyPress}/>
          </>
        )}
      </Menu>
    </Nav>
  );
};



export default Navbar;