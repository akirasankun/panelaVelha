import { View, Text, StyleSheet, TextInput, Pressable,Image,ScrollView } from 'react-native'


export default function Receitas() {
  return (
    <View style={styles.page}>
      <ScrollView>
      <View style={styles.title}>
        <Pressable >
          <Text style={styles.title_Text}>Panela Velha</Text>
        </Pressable>
      </View>
      <View style={styles.receitas}>
      <Pressable >
          <Text style={styles.title_Text}>Receitas</Text>
        </Pressable>
        <Card login='@Akira' titulo='Frango Xadrez' capa={require("../../assets/images/feijoada.png")}></Card>
        <Card login='@Jorge' titulo='Feijoada' capa={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}></Card>
      </View>
      </ScrollView>
    </View>
  )
}


const Card = (prop) => <View style={comp_styles.componente}>
<View><Image source={prop.capa} style={comp_styles.imagem}></Image></View>
<View style={comp_styles.head}>
  <View style={comp_styles.foto}><Image source={prop.capa} style={comp_styles.foto_img}></Image></View>
  <View style={comp_styles.resumo}>
    <View><Pressable ><Text  style={comp_styles.resumo_user}>{prop.login}</Text></Pressable></View>
    <View><Pressable ><Text style={comp_styles.resumo_titulo}>{prop.titulo}</Text></Pressable></View>
  </View>
  <View style={{width:'20%'}}><Pressable ><Text style={comp_styles.resumo_hora}>4 horas</Text></Pressable></View>
</View>
<View style={comp_styles.body}><Pressable ><Text style={comp_styles.body_Text}>Feito com poucos ingredientes para você, não esqueça de avaliar</Text></Pressable></View>
<View>
<View style={comp_styles.footer}>
  <View style={comp_styles.footer_botao}><Pressable style={styles.bt_receita} >VER RECEITA</Pressable ></View>
  <View style={comp_styles.footer_avaliacao}>
    <View><Pressable ><Text>Estrelas</Text></Pressable></View>
    <View><Pressable ><Text>4,9 mi avaliações </Text></Pressable></View>
  </View>
</View>
</View>
</View>;

const comp_styles = StyleSheet.create({
  componente:{
    margin: 5,
    flexDirection: 'column',
    borderColor: '#CCC',
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },

  imagem:{
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height:150,
    width: '100%'
  },

  head:{
    flex: 1,
    borderColor: '#cccccc',

    flexDirection: 'row'
  },

  body_Text:{
    color: "#000",
    fontSize: 25,
    fontFamily: 'Verdan',
    width: '100%',
    textAlign: 'left',
    padding:10
  },

  footer:{
    margin:5,
    flexDirection: 'row',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  footer_botao:{
    width: "50%",
    borderBottomLeftRadius: 20,
  },

  footer_avaliacao:{
    width: "50%",
    borderBottomRightRadius: 20,
  },

  foto:{
    margin:5
  },

  foto_img:{
    width: 55,
    height: 55,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },

  resumo:{
    width: '65%'
  },

  resumo_user: {
    color: "#000",
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Verdan',
    width: '100%',
    paddingLeft: 5,
    paddingBottom: 5,
    paddingTop: 5,
  },

  resumo_titulo: {
    color: "#000",
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Verdan',
    width: '100%',
    paddingLeft: 5,
  },

  resumo_hora: {
    color: "#000",
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Verdan',
    width: '100%',
    textAlign: 'right'
  }
  
})


const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20
  },

  title: {
    backgroundColor: "#CEBBBB",
    textAlign: "left",
    borderBottomWidth: 4,
    borderBottomColor: "#A17878",
    width: '100%',
    height: 60
  },

  title_Text: {
    color: "#A17878",
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Verdan',
    width: '100%',
    textAlign: 'left',
    paddingLeft: 25,
  },

  receitas:{
    backgroundColor: "#FFF",
    width: '100%',
    flex: 2,
  },

  receitas2:{
    width: '100%',
    flex: 3,
    backgroundColor: "#FFD5D5",
  },

  receitas_title:{
    color: "#FFB266",
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Verdan',
    width: '100%',
    textAlign: 'left',
    paddingLeft: 25,
  },

  login: {
    flex: 1,
    backgroundColor: "#FFFFdd",
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%'
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 4,
    borderColor: "#CCCCCC",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    width: '100%',
  },
  bt_receita: {
    textAlign: 'center',
    color: '#00BFFF',
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    height: 50,
    borderWidth: 4,
    borderColor: "#CCCCCC",
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  }
});
