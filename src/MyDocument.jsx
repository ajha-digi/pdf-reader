import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Link,Note } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        <Text>Backend data</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
        <Image src="https://cdn.pixabay.com/photo/2023/12/08/14/14/beetle-8437661_960_720.jpg" />
      </View>
      <Link src="www.facebook.com">Go to Facebook</Link>
    </Page>
  </Document>
);

export default MyDocument;
