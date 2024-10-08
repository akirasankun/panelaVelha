import { View, Text, StyleSheet, TextInput, Pressable, Image,FlatList } from 'react-native'
//todo: Ajustar o titulo a imagem é menor e o nome e avaliacao da receita estao do lado da imagem
//todo: Do lado do nome do usuario tem um botao de compartilhar 
//todo: Pesquisar como faz para inserir o video.



export default function Receitas() {
  return (
    <View style={styles.page}>
      <View style={styles.title}>
        <text style={styles.title_text}>Receita</text>
      </View>
      <View style={styles.receitas}>
        <View style={comp_styles.componente}>
          <View><Image source={require("../../assets/images/feijoada.png")} style={comp_styles.imagem}></Image></View>
          <View style={comp_styles.head}>
            <View style={comp_styles.foto}><Image source={require("../../assets/images/feijoada.png")} style={comp_styles.foto_img}></Image></View>
            <View style={comp_styles.resumo}>
              <View><Text style={comp_styles.resumo_user}>@Akira</Text></View>
              <View ><Text style={comp_styles.resumo_titulo}>Feijoada</Text></View>
            </View>
            <View style={{ width: '20%' }}><Text style={comp_styles.resumo_hora}>4 horas</Text></View>
          </View>
          <View style={comp_styles.body}>
            <Pressable style={styles.space}><Text style={comp_styles.body_text}>Feito com poucos ingredientes para você, não esqueça de avaliar</Text></Pressable>
            <Pressable style={styles.space}><Text style={comp_styles.body_text}>Video se tiver!</Text></Pressable>
            <Pressable style={styles.space}>
              <FlatList data={[{key: 'Feijão Preto'},{key: 'Rabo de porco'},{key: 'Bacon'}]} renderItem={({item}) => <Text>* {item.key}</Text>}>
              </FlatList>
            </Pressable>
              
              
            <Pressable style={styles.space}><Text style={comp_styles.body_text}>Modo de preparo</Text></Pressable>
            <Pressable style={styles.space}><Text style={comp_styles.body_text}>Avaliacao</Text></Pressable>
          </View>

          
        </View>
      </View>
    </View>
  )
}


const comp_styles = StyleSheet.create({
  componente: {
    margin: 5,
    flexDirection: 'column',
    borderColor: '#CCC',
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },

  imagem: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 150,
    width: '100%'
  },

  head: {
    flex: 1,
    borderColor: '#cccccc',
    flexDirection: 'row'
  },

  body_text: {
    color: "#000",
    fontSize: 25,
    fontFamily: 'Verdan',
    width: '100%',
    textAlign: 'left',
    padding: 10
  },

  footer: {
    margin: 5,
    flexDirection: 'row',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  footer_botao: {
    width: "50%",
    borderBottomLeftRadius: 20,
  },

  footer_avaliacao: {
    width: "50%",
    borderBottomRightRadius: 20,
  },

  foto: {
    margin: 5
  },

  foto_img: {
    width: 55,
    height: 55,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },

  resumo: {
    width: '65%'
  },

  resumo_user: {
    color: "#000",
    fontSize: 18,
    fontFamily: 'BalooThamni',
    width: '100%',
    paddingLeft: 5,
    paddingBottom: 5,
    paddingTop: 5,
  },

  resumo_titulo: {
    color: "#000",
    fontSize: 20,
    fontFamily: 'BalooThamni',
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
  space: {
    backgroundColor: "#FFF",
    textAlign: "left",
    borderBottomWidth: 4,
    borderBottomColor: "#FFB266",
    width: '100%'
  },
  page: {
    flex: 1,
    padding: 20,
    flexDirection: 'column'
  },

  title: {
    backgroundColor: "#CCC",
    textAlign: "left",
    borderBottomWidth: 4,
    borderBottomColor: "#A17878",
    width: '100%',
    height: 60
  },
  title_text: {
    color: "#A17878",
    fontWeight: 'bold',
    fontSize: 32,
    fontFamily: 'BalooThamni',
    width: '100%',
    textAlign: 'left',
    paddingLeft: 25,
  },

  receitas: {
    backgroundColor: "#FFF",
    width: '100%',
    flex: 2,
  },

  receitas2: {
    width: '100%',
    flex: 3,
    backgroundColor: "#FFD5D5",
  },

  receitas_title: {
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
