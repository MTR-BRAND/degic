
import React from 'react'
import { Facebook, Twitter, Instagram,} from "@mui/icons-material"; 
import {Box, Container,Grid, Typography, Link, IconButton, Grid2 } from  "@mui/material"

function Footer() {
    const FooterData = [
        {
            Title:"Home",
            links:['About Us', 'Careers', 'Press', 'Blog']
        },
        {
            Title:"Product",
            links:['About Us', 'Careers', 'Press', 'Blog']
        },
        {
            Title:"Legals",
            links:['About Us', 'Careers', 'Press', 'Blog']
        },
        {
            Title:"Blog",
            links:['About Us', 'Careers', 'Press', 'Blog']
        }

    ]; 

const SocialIcons = [
    { icon: <Facebook />, href: '#'},
    { icon: <Twitter />, href: '#' },
    { icon: <Instagram />, href: '#' },
]
  return (
    <Box sx={{bgcolor:"#000", color:"#fff", py:6}}>
        <Container maxWidth="lg">
            <Grid  container spacing={4}>
                
               <Grid item xs={12} md={3}>
                   <Typography>
                        <img src="/WhiteLogo.png" alt="" />
                   </Typography>
               </Grid> 

                {
                  FooterData.map((section, index)=> (
                       <Grid item xs={6} md={2} key={index}>
                            <Typography>
                                {section.Title}
                            </Typography>
                            {section.links.map((link, linkIndex)=> (
                                <Box key={linkIndex}>
                                    <Link href="#" underline='none' color='inherit ' display="block" sx={{my:1}}>
                                        {link}
                                    </Link>
                                </Box>
                            ))}
                       </Grid> 
                  )) }
            </Grid>
            <hr className='mt-10 mb-2 text-[#C4C4C4]' />

            <Box  display="flex" justifyContent="center" >
        
              
                    {
                        SocialIcons.map((social, index)=> (
                              <IconButton key={index} href={social.href} color='inherit'>
                                    {social.icon}
                              </IconButton>  
                        ))}

                  </Box>
                  <Box mt={4} textAlign="center">
                        <Typography>
                        © {new Date().getFullYear()} Degic. All rights reserved.
                        </Typography>
                  </Box>


        </Container>
    </Box>
  )
}

export default Footer