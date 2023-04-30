import * as tttt from 'trythistrythat'
import async_import_meta_resolve from "../lib/async-import-meta-resolve.js"
import { AssertionError } from "assert"

export default async ( id:string ): Promise<void> => {

  const result: boolean|AssertionError = await tttt.deepStrictEqual( async () => {

    return tttt.resolvers(
      await async_import_meta_resolve( 'trythistrythat' ).catch( error => error ),
      'file:///Volumes/code/@cli-dang-rep/async-import-meta-resolve/node_modules/trythistrythat/index.js'
    )
  } )

  if( result instanceof Error ) {
    tttt.failed( 'resolves' )
    tttt.end( id, false, 'resolves' )
  }else
    tttt.end( id, true, 'resolves' )
}

export  async function rejects ( id:string ): Promise<void>{

  const result: boolean|AssertionError = await tttt.deepStrictEqual( async () => {

    return tttt.resolvers(
      await async_import_meta_resolve( 'koorie' ).catch( error => error ) instanceof Error,
      true
    )
  } )

  if( result instanceof Error ) {
    tttt.failed( 'rejects' )
    tttt.end( id, false, 'rejects', result.message )
  }else
    tttt.end( id, true, 'rejects' )
}