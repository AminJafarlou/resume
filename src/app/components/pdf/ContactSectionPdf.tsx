import { Link, StyleSheet, Text, View } from '@react-pdf/renderer'
import { contactInfo } from '../../data/information'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  centerText: {
    flex: 1,
    textAlign: 'left',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  contactList: {
    flex: 1,
    flexDirection: 'column',
  },
  contactRow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
  },
  link: {
    fontSize: 12,
    color: '#2563eb',
    textDecoration: 'underline',
  },
  text: {
    fontSize: 12,
    color: '#000',
  },
})

export const ContactSectionPDF = () => (
  <View style={styles.container}>
    <View style={styles.centerText}>
      <Text style={styles.name}>{contactInfo.fullName}</Text>
    </View>

    <View style={styles.contactList}>
      <View style={styles.contactRow}>
        <Text style={styles.label}>Email:</Text>
        <Link src={`mailto:${contactInfo.email}`} style={styles.link}>
          {contactInfo.email}
        </Link>
      </View>

      <View style={styles.contactRow}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.text}>{contactInfo.phone}</Text>
      </View>

      <View style={styles.contactRow}>
        <Text style={styles.label}>Google Scholar:</Text>
        {/* @ts-expect-error target*/}
        <Link src={`https://${contactInfo.scholar}`} style={styles.link} target="_blank">
          Link
        </Link>
      </View>
    </View>
  </View>
)
