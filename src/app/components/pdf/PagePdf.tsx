import { sections } from '@/app/data/information'
import { Document, Page, StyleSheet, View } from '@react-pdf/renderer'
import { ContactSectionPDF } from './ContactSectionPdf'
import { ResumeSectionPDF } from './ResumeSectionPdf'

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
  },
  sectionWrapper: {
    marginBottom: 12,
  },
})

export const PagePdf = () => (
  <Document>
    <Page wrap={false} size="A4" style={styles.page}>
      <ContactSectionPDF />

      {sections.slice(0, 3).map((section, index) => (
        <View key={index} style={styles.sectionWrapper}>
          <ResumeSectionPDF section={section} />
        </View>
      ))}
    </Page>

    <Page wrap={false} size="A4" style={styles.page}>
      {sections.slice(3, 7).map((section, index) => (
        <View key={index} style={styles.sectionWrapper}>
          <ResumeSectionPDF section={section} />
        </View>
      ))}
    </Page>

    <Page wrap={false} size="A4" style={styles.page}>
      {sections.slice(7).map((section, index) => (
        <View key={index} style={styles.sectionWrapper}>
          <ResumeSectionPDF section={section} />
        </View>
      ))}
    </Page>
  </Document>
)
