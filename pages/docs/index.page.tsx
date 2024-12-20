import React from 'react';
import { getLayout } from '~/components/Sidebar';
import Head from 'next/head';
import { Headline1 } from '~/components/Headlines';
import { SectionContext } from '~/context';
import Card from '~/components/Card';
import { DocsHelp } from '~/components/DocsHelp';

export default function Welcome() {
  const newTitle = 'Welcome';
  return (
    <SectionContext.Provider value='docs'>
      <Head>
        <title>{newTitle}</title>
      </Head>
      <Headline1>{newTitle}</Headline1>
      <p>
        JSON Schema is a declarative language for annotating and validating JSON
        documents' structure, constraints, and data types. It helps you
        standardize and define expectations for JSON data.
        <br />
        Our documentation will guide you through the basics and beyond of
        defining and validating JSON data.
        <br />
        <span className='font-bold text-[1.3rem]'>Explore the docs</span>
      </p>
      <div className='w-full lg:w-full grid grid-cols-1 sm:grid-cols-2 gap-6 my-[10px] mx-auto mt-8'>
        <Card
          icon='/icons/eye.svg'
          title='Introduction'
          body='Discover JSON Schema: its purpose and role in data validation.'
          headerSize='medium'
          bodyTextSize='small'
          link='/overview/what-is-jsonschema'
        />
        <Card
          icon='/icons/compass.svg'
          title='Get started'
          body='New to JSON Schema? Learn the basics of schema design.'
          headerSize='medium'
          bodyTextSize='small'
          link='/learn'
        />
        <Card
          icon='/icons/grad-cap.svg'
          title='Guides'
          body='Master JSON schemas with our practical guides.'
          headerSize='medium'
          bodyTextSize='small'
          link='/learn/guides'
        />
        <Card
          icon='/icons/book.svg'
          title='Reference'
          body='Dive deeper into JSON Schema: explore keywords and their usage.'
          headerSize='medium'
          bodyTextSize='small'
          link='/understanding-json-schema'
        />
        <Card
          icon='/icons/clipboard.svg'
          title='Specification'
          body='Understand the evolution of JSON Schema through draft specifications.'
          headerSize='medium'
          bodyTextSize='small'
          link='/specification'
        />
      </div>
      <DocsHelp />
    </SectionContext.Provider>
  );
}
Welcome.getLayout = getLayout;
