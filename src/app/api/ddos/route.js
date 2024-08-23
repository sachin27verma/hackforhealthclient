// pages/api/ddos.js

import { NextResponse } from 'next/server';
import {cors} from 'cors';


const corsopiton = {
    origin: true,
    methods: ['GET'],
    allowedHeaders: ['Content-Type'],
    
  }

const link = "http://mis.svnit.ac.in/SVNIT/";

export async function GET(req) {
 try {

    return NextResponse.redirect(link, { status: 302 });
    
 } catch (error) {
    
    console.log("doing error in ddos")
 }
}
