import { StyleSheet, Text, View } from '@react-pdf/renderer'
import { Section } from '../../data/information'
import { renderItemsPDF } from './renderItemsPdf'

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    backgroundColor: '#0ea5e9',
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 6,
    borderRadius: 4,
    marginBottom: 16,
  },
})

export const ResumeSectionPDF = ({ section }: { section: Section }) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>{section.title}</Text>
    {renderItemsPDF(section.items)}
  </View>
)
